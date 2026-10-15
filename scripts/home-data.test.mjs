import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import {
  colleges, figures, formatFigure, heroImages, closingPhotos, recruiterLogos, sectors,
  processSteps, posters, companyPackages, summariseOffers, offerRows, posterTotal,
  faqs, collegeShortName, contact,
} from "../app/components/home/data.ts";

test("six colleges, one per /placements route", () => {
  const routes = readdirSync("app/placements", { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name).sort();
  assert.deepEqual(colleges.map((c) => c.slug).sort(), routes);
});

test("official college names", () => {
  const byslug = Object.fromEntries(colleges.map((c) => [c.slug, c.name]));
  assert.equal(byslug.dental, "JKKN Dental College and Hospital");
  assert.equal(byslug.engineering, "JKKN College of Engineering and Technology (Autonomous)");
  assert.equal(byslug["arts-science"], "JKKN College of Arts and Science (Autonomous)");
  assert.equal(byslug["allied-health"], "JKKN College of Allied Health Sciences");
});

test("figures are the main site's", () => {
  assert.deepEqual(figures.map(formatFigure), ["92", "500+", "8.5", "3.5", "50,000+", "74+"]);
});

test("formatFigure joins whole, fraction and suffix", () => {
  assert.equal(formatFigure({ id: "a", whole: 50000, separator: true, suffix: "+", caption: "" }), "50,000+");
  assert.equal(formatFigure({ id: "b", whole: 8, fraction: ".5", caption: "" }), "8.5");
  assert.equal(formatFigure({ id: "c", whole: 1200, caption: "" }), "1200");
});

test("offers are summarised per company from the posters", () => {
  assert.equal(posters.length, 22);
  assert.ok(!posters.some((p) => p.n === 20), "poster 20 is a defective duplicate");
  const rows = summariseOffers(posters, companyPackages);
  assert.deepEqual(rows.map((r) => [r.company, r.offers, r.packageLpa]), [
    ["Sakthi Auto Component Limited", 93, "2.71"],
    ["Pronoia Insurance Marketing", 42, "4.5"],
    ["Foxconn", 30, "2.00"],
    ["Omega Healthcare", 14, "2.70"],
  ]);
  assert.deepEqual(rows[3].colleges, ["allied-health", "nursing", "pharmacy"]);
  assert.deepEqual(offerRows, rows);
  assert.equal(posterTotal, 179);
});

test("summariseOffers throws on a company with no package", () => {
  assert.throws(() => summariseOffers([{ n: 99, college: "dental", company: "Nobody", learners: 1 }], {}), /Nobody/);
});

test("every image is local or on an allowlisted host", () => {
  const config = readFileSync("next.config.ts", "utf8");
  const hosts = [...config.matchAll(/hostname:\s*"([^"]+)"/g)].map((m) => m[1]);
  const srcs = [
    ...colleges.map((c) => c.image), heroImages.gate.src, heroImages.handover.src,
    ...closingPhotos.map((p) => p.src), ...recruiterLogos.map((l) => l.src),
    ...posters.map((p) => `/alumni/${p.n}.jpg`),
  ];
  for (const src of srcs) {
    if (src.startsWith("/")) assert.ok(existsSync(`public${src}`), `missing public${src}`);
    else assert.ok(hosts.includes(new URL(src).hostname), `host not allowlisted: ${src}`);
  }
});

test("no stale figures or old terminology", () => {
  const text = JSON.stringify({ colleges, figures, sectors, processSteps, faqs, contact, closingPhotos, heroImages });
  assert.doesNotMatch(text, /\bstudents?\b/i);
  assert.doesNotMatch(text, /12 LPA|95%|90[–-]95%|1,?200\+/);
  const dir = "app/components/home";
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".tsx"))) {
    const src = readFileSync(`${dir}/${f}`, "utf8");
    assert.doesNotMatch(src, /\bstudents?\b/i, `${f} says student`);
    assert.doesNotMatch(src, /12 LPA|95%|90[–-]95%|1,?200\+/, `${f} has stale figure`);
  }
});

test("headline copy fits the two-line budget", () => {
  for (const s of processSteps) assert.ok(s.line.length <= 22, `process line too long: ${s.line}`);
  for (const f of faqs) assert.ok(f.q.length <= 40, `question too long: ${f.q}`);
  assert.ok(faqs.length >= 5 && faqs.length <= 7);
});

test("collegeShortName", () => {
  assert.equal(collegeShortName("arts-science"), "Arts and Science");
  assert.equal(collegeShortName("allied-health"), "Allied Health Sciences");
});

test("every sector and college lists recruiters", () => {
  assert.equal(sectors.length, 6);
  for (const c of colleges) assert.ok(c.recruiters.length >= 5 && c.programmes.length >= 1, c.slug);
  assert.equal(contact.email, "cdc@jkkn.ac.in");
});
