import Image from "next/image";
import Link from "next/link";
import Magnet from "@/components/react-bits/Magnet";
import { closingPhotos, contact } from "./data";

export default function ClosingField() {
  return (
    <section aria-labelledby="close-title">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {closingPhotos.map((p, i) => (
          <div
            key={p.src}
            className={`relative aspect-[4/3] md:aspect-auto md:h-[40svh] ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="grey object-cover" />
          </div>
        ))}
      </div>

      <div className="report-x bg-field py-16 text-paper md:min-h-[44svh]">
        <div className="report-grid gap-y-8">
          <h2 id="close-title" className="sr-only">Contact the Placement Cell</h2>
          <p className="t-lead col-span-12 max-w-[26ch] lg:col-span-7">Your offer letter starts with one conversation.</p>
          <div className="col-span-12 lg:col-span-7">
            <Magnet padding={60} magnetStrength={4}>
              <Link href="/contact" className="link-bar t-lead inline-block font-semibold">
                Talk to the Placement Cell
              </Link>
            </Magnet>
          </div>
          <div className="t-body col-span-12 lg:col-span-7">
            <p>
              <a href={`mailto:${contact.email}`} className="underline decoration-2 underline-offset-4">{contact.email}</a>
              {" · "}
              <a href={contact.phoneHref} className="underline decoration-2 underline-offset-4">{contact.phone}</a>
            </p>
            <p className="mt-1">{contact.hours}. {contact.address}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
