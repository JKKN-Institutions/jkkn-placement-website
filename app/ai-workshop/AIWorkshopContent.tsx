"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  AIWorkshopContent  --  AI Career Workshop Landing Page             */
/* ------------------------------------------------------------------ */

export default function AIWorkshopContent() {
  /* ---- state ---- */
  const [showTamil, setShowTamil] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    school: "",
    district: "",
    studentClass: "",
    consent: false,
  });

  /* ---- scroll-reveal via IntersectionObserver ---- */
  const revealRefs = useRef<HTMLElement[]>([]);
  const addRevealRef = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aiw-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---- helpers ---- */
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (idx: number) =>
    setOpenFaq((prev) => (prev === idx ? null : idx));

  const En = ({ children }: { children: React.ReactNode }) => (
    <span className="aiw-en">{children}</span>
  );
  const Ta = ({ children }: { children: React.ReactNode }) => (
    <span className="aiw-ta">{children}</span>
  );

  /* ---- SVG Icons ---- */
  const IconTarget = (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b6d41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  );
  const IconRobot = (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b6d41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 2v6"/><circle cx="8" cy="14" r="1.5" fill="#0b6d41"/><circle cx="16" cy="14" r="1.5" fill="#0b6d41"/><path d="M9 18h6"/><circle cx="12" cy="2" r="1.5"/></svg>
  );
  const IconGrad = (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0b6d41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/><path d="M22 10v6"/></svg>
  );
  const IconCheck = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#0b6d41"/><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  const IconRocket = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7db247" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"/></svg>
  );
  const IconPhone = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
  const IconMail = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
  );
  const IconWhatsApp = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  );

  /* ---- FAQ data ---- */
  const faqItems = [
    {
      qEn: "Is this workshop really free?",
      qTa: "இந்த பட்டறை உண்மையிலேயே இலவசமா?",
      aEn: "Yes, 100% free! There are no registration fees, no hidden charges, and no costs for materials. This is a community initiative by JKKN Educational Institutions to bring AI career guidance to rural students.",
      aTa: "ஆம், 100% இலவசம்! பதிவுக் கட்டணம், மறைமுக கட்டணங்கள் அல்லது பொருட்களுக்கான செலவுகள் எதுவும் இல்லை. இது JKKN கல்வி நிறுவனங்களால் கிராமப்புற மாணவர்களுக்கு AI தொழில் வழிகாட்டுதலை வழங்குவதற்கான சமூக முன்முயற்சி.",
    },
    {
      qEn: "Which students can attend?",
      qTa: "எந்த மாணவர்கள் கலந்துகொள்ளலாம்?",
      aEn: "Students from classes 8 to 12 studying in rural schools across Namakkal, Salem, Erode, and surrounding districts can attend. Both boys and girls are welcome.",
      aTa: "நாமக்கல், சேலம், ஈரோடு மற்றும் சுற்றியுள்ள மாவட்டங்களில் உள்ள கிராமப்புற பள்ளிகளில் 8 முதல் 12 வகுப்புகளில் படிக்கும் மாணவர்கள் கலந்துகொள்ளலாம்.",
    },
    {
      qEn: "Do students need a laptop or phone?",
      qTa: "மாணவர்களுக்கு மடிக்கணினி அல்லது தொலைபேசி தேவையா?",
      aEn: "No! We provide all necessary equipment during the workshop. Students just need to come with enthusiasm and a willingness to learn.",
      aTa: "இல்லை! பட்டறையின் போது தேவையான அனைத்து உபகரணங்களையும் நாங்கள் வழங்குகிறோம். மாணவர்கள் உற்சாகத்துடனும் கற்றுக்கொள்ளும் விருப்பத்துடனும் வந்தால் போதும்.",
    },
    {
      qEn: "What will I get after the workshop?",
      qTa: "பட்டறைக்குப் பிறகு எனக்கு என்ன கிடைக்கும்?",
      aEn: "Every student receives a personalized AI career report, a certificate of participation, career roadmap, and access to follow-up mentoring sessions.",
      aTa: "ஒவ்வொரு மாணவரும் தனிப்பயனாக்கப்பட்ட AI தொழில் அறிக்கை, பங்கேற்பு சான்றிதழ், தொழில் வழிகாட்டி மற்றும் தொடர் வழிகாட்டுதல் அமர்வுகளுக்கான அணுகலைப் பெறுவார்கள்.",
    },
    {
      qEn: "How does the AI career test work?",
      qTa: "AI தொழில் பரிசோதனை எவ்வாறு செயல்படுகிறது?",
      aEn: "Students answer a series of aptitude and interest questions. Our AI system analyzes the responses and matches them with suitable career paths, providing personalized recommendations based on their strengths.",
      aTa: "மாணவர்கள் திறன் மற்றும் ஆர்வம் தொடர்பான கேள்விகளுக்கு பதிலளிப்பார்கள். எங்கள் AI அமைப்பு பதில்களை பகுப்பாய்வு செய்து, அவர்களின் பலங்களின் அடிப்படையில் பொருத்தமான தொழில் பாதைகளை பரிந்துரைக்கிறது.",
    },
    {
      qEn: "Is transport provided?",
      qTa: "போக்குவரத்து வசதி உள்ளதா?",
      aEn: "For workshops held at JKKN Campus, we arrange bus transport from select pickup points in Namakkal and surrounding areas. For school visits, we come to your school directly.",
      aTa: "JKKN வளாகத்தில் நடைபெறும் பட்டறைகளுக்கு, நாமக்கல் மற்றும் சுற்றுப்புற பகுதிகளில் தேர்ந்தெடுக்கப்பட்ட இடங்களில் இருந்து பேருந்து போக்குவரத்தை ஏற்பாடு செய்கிறோம். பள்ளி வருகைகளுக்கு, நாங்கள் நேரடியாக உங்கள் பள்ளிக்கு வருகிறோம்.",
    },
  ];

  /* ================================================================ */
  /*                          RENDER                                  */
  /* ================================================================ */
  return (
    <div className={`aiw-root${showTamil ? " show-tamil" : ""}`}>
      {/* ---------- inline styles ---------- */}
      <style>{`
/* ===== BASE / RESET ===== */
.aiw-root{font-family:'Inter',system-ui,-apple-system,sans-serif;color:#4B5563;line-height:1.6;overflow-x:hidden;}
.aiw-root *,.aiw-root *::before,.aiw-root *::after{box-sizing:border-box;margin:0;padding:0;}

/* ===== BILINGUAL TOGGLE ===== */
.aiw-ta{display:none;}
.show-tamil .aiw-ta{display:inline;}
.show-tamil .aiw-en{display:none;}

/* ===== SCROLL REVEAL ===== */
.aiw-reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease;}
.aiw-reveal.aiw-visible{opacity:1;transform:translateY(0);}

/* ===== CONTAINER ===== */
.aiw-container{max-width:1200px;margin:0 auto;padding:0 24px;}

/* ===== SECTION SUBNAV ===== */
.aiw-subnav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid #e5e7eb;}
.aiw-subnav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:52px;}
.aiw-subnav-links{display:flex;align-items:center;gap:8px;}
.aiw-subnav-link{color:#4B5563;font-size:14px;font-weight:500;text-decoration:none;padding:6px 14px;border-radius:6px;transition:all .2s;}
.aiw-subnav-link:hover{color:#0b6d41;}
.aiw-subnav-lang{padding:5px 14px;border-radius:999px;border:1px solid #e5e7eb;background:#fff;color:#4B5563;font-size:13px;cursor:pointer;transition:all .2s;font-family:inherit;}
.aiw-subnav-lang:hover{border-color:#0b6d41;color:#0b6d41;}
.aiw-subnav-cta{display:inline-flex;align-items:center;padding:9px 24px;background:#0b6d41;color:#fff;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;transition:all .3s ease;white-space:nowrap;}
.aiw-subnav-cta:hover{background:#0f8f56;transform:translateY(-2px);box-shadow:0 6px 20px rgba(11,109,65,0.4);}
.aiw-subnav-cta:active{transform:translateY(0);}

/* ===== BACK BUTTON ===== */
.aiw-back-btn{display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,0.7);font-size:14px;font-weight:500;text-decoration:none;padding:8px 16px;border-radius:8px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);transition:all 0.3s;margin-bottom:24px;}
.aiw-back-btn:hover{background:rgba(255,255,255,0.15);color:#fff;transform:translateX(-4px);}
.aiw-back-btn:active{transform:translateX(-2px);}

/* ===== HERO ===== */
.aiw-hero{background:radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(135deg,#021e12 0%,#03311c 40%,#043a1f 100%);background-size:30px 30px,100% 100%;color:#fff;padding:80px 0 100px;position:relative;overflow:hidden;min-height:100vh;display:flex;align-items:center;}
.aiw-hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.aiw-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(125,178,71,0.15);color:#7db247;border:1px solid rgba(125,178,71,0.3);padding:8px 18px;border-radius:999px;font-size:13px;font-weight:600;margin-bottom:24px;}
.aiw-pulse-dot{width:8px;height:8px;background:#7db247;border-radius:50%;animation:aiwDotPulse 2s ease-in-out infinite;}
@keyframes aiwDotPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.5);}}
.aiw-hero h1{font-size:48px;font-weight:800;line-height:1.15;margin-bottom:20px;color:#fff;}
.aiw-hero h1 .aiw-accent{color:#7db247;}
.aiw-hero-desc{font-size:17px;color:rgba(255,255,255,0.8);margin-bottom:32px;max-width:520px;}
.aiw-hero-ctas{display:flex;gap:16px;margin-bottom:36px;flex-wrap:wrap;}
.aiw-btn-primary{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#0b6d41;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .3s ease;animation:aiwPulse 2s ease-in-out infinite;position:relative;overflow:hidden;}
.aiw-btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left .5s ease;}
.aiw-btn-primary:hover{background:#0f8f56;transform:translateY(-3px);box-shadow:0 10px 30px rgba(11,109,65,0.5);}
.aiw-btn-primary:hover::after{left:100%;}
.aiw-btn-primary:active{transform:translateY(-1px);box-shadow:0 5px 15px rgba(11,109,65,0.4);}
.aiw-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:transparent;color:rgba(255,255,255,0.8);border:2px solid rgba(255,255,255,0.2);border-radius:12px;font-size:16px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .3s ease;}
.aiw-btn-outline:hover{border-color:#7db247;color:#fff;background:rgba(125,178,71,0.1);transform:translateY(-3px);box-shadow:0 10px 30px rgba(125,178,71,0.2);}
.aiw-btn-outline:active{transform:translateY(-1px);}
.aiw-trust-badges{display:flex;gap:16px;flex-wrap:wrap;}
.aiw-trust-badge{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,0.5);font-size:12px;}

/* hero card */
.aiw-hero-card-wrap{display:flex;justify-content:center;}
.aiw-hero-card{position:relative;width:320px;height:320px;}
.aiw-hero-card-inner-wrap{width:100%;height:100%;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:32px;animation:aiwFloat 6s ease-in-out infinite;}
.aiw-hero-card-inner{width:100%;height:100%;background:rgba(3,49,28,0.6);border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;}
.aiw-hero-card-icon{margin-bottom:4px;}
.aiw-hero-card-title{font-size:22px;font-weight:700;text-align:center;color:#fff;line-height:1.3;}
.aiw-hero-card-tags{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;justify-content:center;}
.aiw-hero-card-tag{padding:5px 16px;border-radius:999px;font-size:12px;font-weight:600;}
.aiw-tag-green{background:rgba(11,109,65,0.35);color:#0f8f56;border:1px solid rgba(11,109,65,0.5);}
.aiw-tag-accent{background:rgba(125,178,71,0.25);color:#7db247;border:1px solid rgba(125,178,71,0.4);}
.aiw-hero-card-free{position:absolute;top:-12px;right:-12px;background:#0b6d41;color:#fff;padding:10px 22px;border-radius:16px;font-size:15px;font-weight:800;box-shadow:0 6px 20px rgba(11,109,65,0.45);z-index:2;letter-spacing:0.5px;}
.aiw-hero-card-label{position:absolute;bottom:-16px;left:-16px;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);padding:12px 20px;border-radius:14px;font-size:14px;color:rgba(255,255,255,0.85);z-index:2;}
.aiw-label-accent{font-weight:700;color:#7db247;}

/* stats bar */
.aiw-stats-bar{position:absolute;bottom:0;left:0;right:0;background:rgba(255,255,255,0.05);border-top:1px solid rgba(255,255,255,0.08);}
.aiw-stats-bar-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center;}
.aiw-stat-item{padding:20px 16px;}
.aiw-stat-num{font-size:clamp(22px,3vw,30px);font-weight:800;}
.aiw-stat-label{font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;}

/* ===== ABOUT ===== */
.aiw-about{padding:80px 0;background:#fff;}
.aiw-section-badge{display:inline-block;background:rgba(11,109,65,0.15);color:#0b6d41;border:1px solid rgba(11,109,65,0.25);padding:6px 18px;border-radius:999px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;}
.aiw-section-title{font-size:36px;font-weight:800;color:#111827;margin-bottom:12px;}
.aiw-section-subtitle{font-size:17px;color:#4B5563;max-width:640px;margin-bottom:48px;}
.aiw-about-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.aiw-about-card{background:#f0f7f2;border-radius:16px;padding:32px;transition:transform .3s;}
.aiw-about-card:hover{transform:translateY(-4px);}
.aiw-about-icon{width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:14px;margin-bottom:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
.aiw-about-card h3{font-size:20px;font-weight:700;color:#111827;margin-bottom:8px;}
.aiw-about-card p{font-size:15px;color:#4B5563;line-height:1.7;}

/* ===== MODULES ===== */
.aiw-modules{padding:80px 0;background:#f9fafb;}
.aiw-modules-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.aiw-module-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);transition:transform .3s,box-shadow .3s;}
.aiw-module-card:hover{transform:translateY(-8px);box-shadow:0 12px 32px rgba(0,0,0,0.1);}
.aiw-module-header{padding:24px;color:#fff;}
.aiw-module-header.mod1{background:#0b6d41;}
.aiw-module-header.mod2{background:#0f8f56;}
.aiw-module-header.mod3{background:linear-gradient(135deg,#7db247,#0f8f56);}
.aiw-module-num{font-size:13px;font-weight:600;opacity:0.8;text-transform:uppercase;letter-spacing:1px;}
.aiw-module-title{font-size:20px;font-weight:700;margin-top:4px;}
.aiw-module-body{padding:24px;}
.aiw-module-body ul{list-style:none;margin-bottom:16px;}
.aiw-module-body li{padding:6px 0;font-size:14px;color:#4B5563;display:flex;align-items:flex-start;gap:8px;}
.aiw-module-body li::before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;background:#0b6d41;margin-top:8px;flex-shrink:0;}
.aiw-module-duration{display:inline-block;background:rgba(11,109,65,0.1);color:#0b6d41;padding:4px 14px;border-radius:999px;font-size:13px;font-weight:600;}

/* ===== BENEFITS ===== */
.aiw-benefits{padding:80px 0;background:radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(135deg,#021e12 0%,#03311c 40%,#043a1f 100%);background-size:30px 30px,100% 100%;color:#fff;}
.aiw-benefits-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;}
.aiw-glass-panel{background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px;}
.aiw-glass-panel h3{font-size:22px;font-weight:700;margin-bottom:20px;}
.aiw-benefit-list{list-style:none;}
.aiw-benefit-list li{display:flex;align-items:flex-start;gap:10px;padding:8px 0;font-size:15px;color:rgba(255,255,255,0.85);}
.aiw-benefit-sidebar{margin-top:28px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);}
.aiw-benefit-sidebar h4{font-size:17px;font-weight:600;color:#7db247;margin-bottom:14px;}
.aiw-benefit-sidebar li{font-size:14px;}
.aiw-jkkn-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:28px;}
.aiw-jkkn-stat{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:20px;text-align:center;}
.aiw-jkkn-stat-num{font-size:28px;font-weight:800;color:#7db247;}
.aiw-jkkn-stat-label{font-size:12px;color:rgba(255,255,255,0.6);margin-top:4px;}
.aiw-why-list{list-style:none;}
.aiw-why-list li{display:flex;align-items:flex-start;gap:10px;padding:8px 0;font-size:14px;color:rgba(255,255,255,0.85);}

/* ===== HOW IT WORKS ===== */
.aiw-steps{padding:80px 0;background:#fff;}
.aiw-steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.aiw-step-card{text-align:center;padding:32px 20px;border-radius:16px;background:#f0f7f2;transition:transform .3s;}
.aiw-step-card:hover{transform:translateY(-4px);}
.aiw-step-circle{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;color:#fff;font-size:20px;font-weight:800;}
.aiw-step-circle.sc1{background:#0b6d41;}
.aiw-step-circle.sc2{background:#0f8f56;}
.aiw-step-circle.sc3{background:#085032;}
.aiw-step-circle.sc4{background:#0b6d41;}
.aiw-step-circle.sc5{background:#0f8f56;}
.aiw-step-circle.sc6{background:#7db247;}
.aiw-step-card h4{font-size:17px;font-weight:700;color:#111827;margin-bottom:4px;}
.aiw-step-time{font-size:13px;color:#0b6d41;font-weight:600;}
.aiw-step-desc{font-size:14px;color:#4B5563;margin-top:8px;}

/* ===== SCHEDULE ===== */
.aiw-schedule{padding:80px 0;background:#f9fafb;}
.aiw-schedule-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.aiw-schedule-card{background:#fff;border-radius:16px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.06);border-top:4px solid #0b6d41;transition:transform .3s;}
.aiw-schedule-card:hover{transform:translateY(-4px);}
.aiw-schedule-card h4{font-size:18px;font-weight:700;color:#111827;margin-bottom:12px;}
.aiw-schedule-meta{font-size:14px;color:#4B5563;margin-bottom:6px;}
.aiw-schedule-status{display:inline-block;padding:4px 14px;border-radius:999px;font-size:12px;font-weight:700;margin-top:12px;}
.aiw-status-open{background:rgba(11,109,65,0.15);color:#0b6d41;}
.aiw-status-soon{background:rgba(125,178,71,0.15);color:#7db247;}

/* ===== JKKN TRUST ===== */
.aiw-trust{padding:80px 0;background:#fff;}
.aiw-trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:40px;}
.aiw-trust-card{text-align:center;padding:28px 16px;background:#f0f7f2;border-radius:16px;}
.aiw-trust-card-num{font-size:32px;font-weight:800;color:#0b6d41;}
.aiw-trust-card-label{font-size:14px;color:#4B5563;margin-top:4px;}
.aiw-college-chips{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
.aiw-college-chip{background:#f0f7f2;color:#0b6d41;border:1px solid rgba(11,109,65,0.2);padding:8px 20px;border-radius:999px;font-size:14px;font-weight:600;}

/* ===== REGISTRATION ===== */
.aiw-registration{padding:80px 0;background:radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(135deg,#021e12 0%,#03311c 40%,#043a1f 100%);background-size:30px 30px,100% 100%;color:#fff;}
.aiw-form-box{max-width:640px;margin:0 auto;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:40px;}
.aiw-form-box label{display:block;font-size:14px;font-weight:600;margin-bottom:6px;color:rgba(255,255,255,0.9);}
.aiw-form-box input[type="text"],.aiw-form-box input[type="tel"],.aiw-form-box input[type="email"],.aiw-form-box select{width:100%;padding:12px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;font-size:15px;margin-bottom:18px;outline:none;transition:border .3s;}
.aiw-form-box input::placeholder{color:rgba(255,255,255,0.4);}
.aiw-form-box input:focus,.aiw-form-box select:focus{border-color:#7db247;}
.aiw-form-box select option{color:#111827;background:#fff;}
.aiw-consent{display:flex;align-items:flex-start;gap:10px;margin-bottom:24px;font-size:13px;color:rgba(255,255,255,0.7);}
.aiw-consent input{margin-top:3px;accent-color:#0b6d41;}
.aiw-form-submit{width:100%;padding:14px;background:#0b6d41;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;transition:background .3s;}
.aiw-form-submit:hover{background:#0f8f56;}
.aiw-success{text-align:center;padding:40px 20px;}
.aiw-success h3{font-size:28px;color:#7db247;margin-bottom:12px;}
.aiw-success p{font-size:16px;color:rgba(255,255,255,0.8);}
.aiw-success-icon{width:80px;height:80px;background:#0b6d41;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;}

/* ===== FAQ ===== */
.aiw-faq{padding:80px 0;background:#fff;}
.aiw-faq-list{max-width:780px;margin:0 auto;}
.aiw-faq-item{border:1px solid #e5e7eb;border-radius:14px;margin-bottom:12px;overflow:hidden;transition:box-shadow .3s;}
.aiw-faq-item:hover{box-shadow:0 4px 16px rgba(0,0,0,0.06);}
.aiw-faq-q{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;cursor:pointer;font-size:16px;font-weight:600;color:#111827;background:#fff;border:none;width:100%;text-align:left;}
.aiw-faq-q:hover{color:#0b6d41;}
.aiw-faq-arrow{font-size:20px;transition:transform .3s;color:#0b6d41;flex-shrink:0;margin-left:12px;}
.aiw-faq-arrow.open{transform:rotate(180deg);}
.aiw-faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s ease;padding:0 24px;}
.aiw-faq-a.expanded{max-height:500px;padding:0 24px 20px;}
.aiw-faq-a p{font-size:15px;color:#4B5563;line-height:1.7;}

/* ===== CTA BANNER ===== */
.aiw-cta-banner{padding:64px 0;background:#0b6d41;text-align:center;color:#fff;}
.aiw-cta-banner h2{font-size:32px;font-weight:800;margin-bottom:8px;max-width:700px;margin-left:auto;margin-right:auto;}
.aiw-cta-banner p{font-size:17px;opacity:0.9;margin-bottom:32px;}
.aiw-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
.aiw-btn-white{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#fff;color:#0b6d41;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .3s ease;}
.aiw-btn-white:hover{background:#f0f7f2;transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.3);}
.aiw-btn-white:active{transform:translateY(-1px);}
.aiw-btn-wa{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:#22c55e;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .3s ease;}
.aiw-btn-wa:hover{background:#16a34a;transform:translateY(-3px);box-shadow:0 10px 30px rgba(34,197,94,0.4);}
.aiw-btn-wa:active{transform:translateY(-1px);}

/* ===== WHATSAPP FLOAT ===== */
.aiw-wa-float{position:fixed;bottom:28px;right:28px;z-index:999;width:60px;height:60px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(34,197,94,0.4);cursor:pointer;transition:transform .3s;text-decoration:none;}
.aiw-wa-float:hover{transform:scale(1.1);}

/* ===== ANIMATIONS ===== */
@keyframes aiwFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
@keyframes aiwPulse{0%,100%{box-shadow:0 0 20px rgba(11,109,65,0.3);}50%{box-shadow:0 0 40px rgba(11,109,65,0.6);}}

/* ===== TEXT HELPERS ===== */
.aiw-text-center{text-align:center;}
.aiw-mb-48{margin-bottom:48px;}

/* ===== RESPONSIVE ===== */
@media(max-width:1024px){
  .aiw-hero-inner{grid-template-columns:1fr;text-align:center;}
  .aiw-hero-desc{margin-left:auto;margin-right:auto;}
  .aiw-hero-ctas{justify-content:center;}
  .aiw-trust-badges{justify-content:center;}
  .aiw-hero-card{width:280px;height:280px;margin:0 auto;}
  .aiw-hero-card-inner-wrap{padding:24px;}
  .aiw-about-grid,.aiw-modules-grid,.aiw-schedule-grid,.aiw-steps-grid{grid-template-columns:repeat(2,1fr);}
  .aiw-benefits-grid{grid-template-columns:1fr;}
  .aiw-trust-grid{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:768px){
  .aiw-subnav-links{gap:4px;}
  .aiw-subnav-link{font-size:13px;padding:6px 8px;}
  .aiw-hero h1{font-size:32px;}
  .aiw-section-title{font-size:28px;}
  .aiw-about-grid,.aiw-modules-grid,.aiw-schedule-grid{grid-template-columns:1fr;}
  .aiw-steps-grid{grid-template-columns:repeat(2,1fr);}
  .aiw-stats-bar-inner{grid-template-columns:repeat(2,1fr);}
  .aiw-jkkn-stats{grid-template-columns:repeat(2,1fr);}
  .aiw-hero{padding:48px 0 100px;min-height:auto;}
  .aiw-stats-bar-inner{grid-template-columns:repeat(2,1fr);}
  .aiw-cta-banner h2{font-size:24px;}
}
@media(max-width:480px){
  .aiw-subnav-link{display:none;}
  .aiw-hero h1{font-size:26px;}
  .aiw-section-title{font-size:22px;}
  .aiw-steps-grid{grid-template-columns:1fr;}
  .aiw-stats-bar{grid-template-columns:1fr;}
  .aiw-trust-grid{grid-template-columns:1fr;}
  .aiw-hero-ctas{flex-direction:column;align-items:center;}
  .aiw-form-box{padding:24px;}
}
      `}</style>

      {/* ==================== SECTION NAV BAR ==================== */}
      <div className="aiw-subnav">
        <div className="aiw-subnav-inner">
          <div className="aiw-subnav-links">
            <a href="#about" className="aiw-subnav-link">About</a>
            <a href="#modules" className="aiw-subnav-link">Modules</a>
            <a href="#audience" className="aiw-subnav-link">Benefits</a>
            <a href="#schedule" className="aiw-subnav-link">Schedule</a>
            <a href="#faq" className="aiw-subnav-link">FAQ</a>
            <button
              className="aiw-subnav-lang"
              onClick={() => setShowTamil((p) => !p)}
            >
              EN / தமிழ்
            </button>
          </div>
          <a href="#register" className="aiw-subnav-cta">Register Free</a>
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="aiw-hero">
        <div className="aiw-container">
          <Link href="/" className="aiw-back-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
          <div className="aiw-hero-inner">
            {/* left */}
            <div>
              <div className="aiw-hero-badge">
                <span className="aiw-pulse-dot"></span>
                <En>100% FREE | No Fees | Open to All Rural Schools</En>
                <Ta>100% இலவசம் | கட்டணமில்லை | அனைத்து கிராம பள்ளிகளுக்கும்</Ta>
              </div>
              <h1>
                <En>
                  AI-Powered <span className="aiw-accent">Career Guidance</span> for Rural Students
                </En>
                <Ta>
                  கிராமப்புற மாணவர்களுக்கான AI <span className="aiw-accent">தொழில்நெறி வழிகாட்டுதல்</span>
                </Ta>
              </h1>
              <p className="aiw-hero-desc">
                <En>
                  Discover your dream career through artificial intelligence. Free AI-powered aptitude testing,
                  personalized career mapping, and hands-on AI tools training for rural school students.
                </En>
                <Ta>
                  செயற்கை நுண்ணறிவு மூலம் உங்கள் கனவு தொழிலைக் கண்டறியுங்கள். கிராமப்புற பள்ளி மாணவர்களுக்கான
                  இலவச AI திறன் பரிசோதனை, தனிப்பயன் தொழில் வழிகாட்டுதல் மற்றும் AI கருவிகள் பயிற்சி.
                </Ta>
              </p>
              <div className="aiw-hero-ctas">
                <a href="#register" className="aiw-btn-primary">
                  <En>Register Free Now</En>
                  <Ta>இப்போதே இலவசமாக பதிவு செய்க</Ta>
                </a>
                <a href="#modules" className="aiw-btn-outline">
                  <En>View Workshop Details</En>
                  <Ta>பட்டறை விவரங்கள்</Ta>
                </a>
              </div>
              <div className="aiw-trust-badges">
                <div className="aiw-trust-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10l4 4 6-7" stroke="#7db247" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <En>NAAC A+ Accredited</En><Ta>NAAC A+ தரநிலை</Ta>
                </div>
                <div className="aiw-trust-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10l4 4 6-7" stroke="#7db247" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <En>74+ Years Legacy</En><Ta>74+ ஆண்டு மரபுரிமை</Ta>
                </div>
                <div className="aiw-trust-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10l4 4 6-7" stroke="#7db247" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <En>50,000+ Alumni</En><Ta>50,000+ முன்னாள் மாணவர்கள்</Ta>
                </div>
              </div>
            </div>
            {/* right - floating card */}
            <div className="aiw-hero-card-wrap">
              <div className="aiw-hero-card">
                {/* FREE badge - stays fixed */}
                <div className="aiw-hero-card-free">FREE</div>
                {/* AI Career Discovery card - floats up and down */}
                <div className="aiw-hero-card-inner-wrap">
                  <div className="aiw-hero-card-inner">
                    <svg className="aiw-hero-card-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect x="37" y="4" width="6" height="12" rx="3" fill="#7db247"/>
                      <circle cx="40" cy="4" r="4" fill="#e8b931"/>
                      <rect x="8" y="32" width="8" height="16" rx="4" fill="#e05a8d"/>
                      <rect x="64" y="32" width="8" height="16" rx="4" fill="#e05a8d"/>
                      <rect x="16" y="16" width="48" height="48" rx="14" fill="#7c6bbf"/>
                      <rect x="22" y="24" width="36" height="32" rx="10" fill="#a78bda"/>
                      <circle cx="33" cy="38" r="6" fill="#fff"/>
                      <circle cx="47" cy="38" r="6" fill="#fff"/>
                      <circle cx="34" cy="37" r="3" fill="#3a3a5c"/>
                      <circle cx="48" cy="37" r="3" fill="#3a3a5c"/>
                      <rect x="32" y="50" width="16" height="4" rx="2" fill="#fff"/>
                      <rect x="20" y="16" width="40" height="6" rx="3" fill="#e8b931"/>
                    </svg>
                    <div className="aiw-hero-card-title">
                      <En>AI Career<br/>Discovery</En>
                      <Ta>AI தொழில்<br/>கண்டறிதல்</Ta>
                    </div>
                    <div className="aiw-hero-card-tags">
                      <span className="aiw-hero-card-tag aiw-tag-green"><En>Aptitude</En><Ta>திறன்</Ta></span>
                      <span className="aiw-hero-card-tag aiw-tag-accent"><En>AI Tools</En><Ta>AI கருவிகள்</Ta></span>
                      <span className="aiw-hero-card-tag aiw-tag-green"><En>Careers</En><Ta>தொழில்கள்</Ta></span>
                    </div>
                  </div>
                </div>
                {/* Label - stays fixed */}
                <div className="aiw-hero-card-label">
                  <span className="aiw-label-accent"><En>AI-Powered</En><Ta>AI-இயக்கும்</Ta></span>{" "}<En>Career Matching</En><Ta>தொழில் பொருத்தம்</Ta>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* stats bar - absolute bottom */}
        <div className="aiw-stats-bar">
          <div className="aiw-stats-bar-inner">
            <div className="aiw-stat-item">
              <div className="aiw-stat-num" style={{ color: '#fff' }}>3</div>
              <div className="aiw-stat-label"><En>AI Modules</En><Ta>AI பிரிவுகள்</Ta></div>
            </div>
            <div className="aiw-stat-item">
              <div className="aiw-stat-num" style={{ color: '#7db247' }}>6 <span style={{ fontSize: 16 }}><En>Hrs</En><Ta>மணி</Ta></span></div>
              <div className="aiw-stat-label"><En>Full-Day Workshop</En><Ta>முழு நாள் பட்டறை</Ta></div>
            </div>
            <div className="aiw-stat-item">
              <div className="aiw-stat-num" style={{ color: '#0f8f56' }}>100%</div>
              <div className="aiw-stat-label"><En>Free of Cost</En><Ta>இலவசம்</Ta></div>
            </div>
            <div className="aiw-stat-item">
              <div className="aiw-stat-num" style={{ color: '#fff' }}>7</div>
              <div className="aiw-stat-label"><En>Colleges to Explore</En><Ta>கல்லூரிகள்</Ta></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="aiw-about" ref={addRevealRef}>
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>ABOUT THE WORKSHOP</En><Ta>பட்டறை பற்றி</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>Why AI Career Guidance for Rural Students?</En>
              <Ta>கிராமப்புற மாணவர்களுக்கு AI தொழில் வழிகாட்டுதல் ஏன்?</Ta>
            </h2>
          </div>
          <div className="aiw-about-grid">
            <div className="aiw-about-card">
              <div className="aiw-about-icon">{IconTarget}</div>
              <h3><En>The Problem</En><Ta>பிரச்சனை</Ta></h3>
              <p>
                <En>
                  Rural students lack access to career counseling. Most choose careers based on peer pressure or limited
                  awareness, missing opportunities that match their true potential.
                </En>
                <Ta>
                  கிராமப்புற மாணவர்களுக்கு தொழில் ஆலோசனை வசதி இல்லை. பெரும்பாலானோர் சக நண்பர்களின் அழுத்தம் அல்லது
                  குறைந்த விழிப்புணர்வின் அடிப்படையில் தொழிலைத் தேர்வு செய்கிறார்கள்.
                </Ta>
              </p>
            </div>
            <div className="aiw-about-card">
              <div className="aiw-about-icon">{IconRobot}</div>
              <h3><En>Our AI Solution</En><Ta>எங்கள் AI தீர்வு</Ta></h3>
              <p>
                <En>
                  Our AI-powered aptitude test analyzes each student&apos;s strengths, interests, and personality to
                  recommend the best career paths -- removing bias and guesswork.
                </En>
                <Ta>
                  எங்கள் AI திறன் பரிசோதனை ஒவ்வொரு மாணவரின் பலம், ஆர்வம் மற்றும் ஆளுமையை பகுப்பாய்வு செய்து
                  சிறந்த தொழில் பாதைகளை பரிந்துரைக்கிறது.
                </Ta>
              </p>
            </div>
            <div className="aiw-about-card">
              <div className="aiw-about-icon">{IconGrad}</div>
              <h3><En>The Outcome</En><Ta>விளைவு</Ta></h3>
              <p>
                <En>
                  Students leave with a personalized career roadmap, AI skills, and confidence to pursue their dream
                  career -- regardless of their village or background.
                </En>
                <Ta>
                  மாணவர்கள் தனிப்பயன் தொழில் வழிகாட்டி, AI திறன்கள் மற்றும் கனவு தொழிலை தொடர நம்பிக்கையுடன்
                  வெளியேறுகிறார்கள்.
                </Ta>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MODULES ==================== */}
      <section className="aiw-modules" id="modules">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>WORKSHOP MODULES</En><Ta>பட்டறை பிரிவுகள்</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>3 Powerful Modules. 1 Day. Life-Changing.</En>
              <Ta>3 சக்திவாய்ந்த பிரிவுகள். 1 நாள். வாழ்க்கையை மாற்றும்.</Ta>
            </h2>
          </div>
          <div className="aiw-modules-grid">
            {/* Module 1 */}
            <div className="aiw-module-card">
              <div className="aiw-module-header mod1">
                <div className="aiw-module-num"><En>MODULE 1</En><Ta>பிரிவு 1</Ta></div>
                <div className="aiw-module-title">
                  <En>AI Career Discovery &amp; Aptitude</En>
                  <Ta>AI தொழில் கண்டறிதல் &amp; திறன்</Ta>
                </div>
              </div>
              <div className="aiw-module-body">
                <ul>
                  <li><En>AI-powered aptitude assessment</En><Ta>AI மூலம் திறன் மதிப்பீடு</Ta></li>
                  <li><En>Personality &amp; interest mapping</En><Ta>ஆளுமை &amp; ஆர்வம் வரைபடம்</Ta></li>
                  <li><En>Career matching algorithm demo</En><Ta>தொழில் பொருத்த வழிமுறை விளக்கம்</Ta></li>
                  <li><En>Personalized career report</En><Ta>தனிப்பயன் தொழில் அறிக்கை</Ta></li>
                </ul>
                <div className="aiw-module-duration">
                  <En>2 Hours Interactive</En><Ta>2 மணி நேர ஊடாடல்</Ta>
                </div>
              </div>
            </div>
            {/* Module 2 */}
            <div className="aiw-module-card">
              <div className="aiw-module-header mod2">
                <div className="aiw-module-num"><En>MODULE 2</En><Ta>பிரிவு 2</Ta></div>
                <div className="aiw-module-title">
                  <En>Hands-On AI Tools Training</En>
                  <Ta>AI கருவிகள் நடைமுறை பயிற்சி</Ta>
                </div>
              </div>
              <div className="aiw-module-body">
                <ul>
                  <li><En>ChatGPT for learning &amp; research</En><Ta>கற்றல் &amp; ஆராய்ச்சிக்கான ChatGPT</Ta></li>
                  <li><En>Google Gemini AI exploration</En><Ta>Google Gemini AI ஆய்வு</Ta></li>
                  <li><En>Canva AI for presentations</En><Ta>விளக்கக்காட்சிக்கான Canva AI</Ta></li>
                  <li><En>AI ethics &amp; responsible use</En><Ta>AI நெறிமுறைகள் &amp; பொறுப்பான பயன்பாடு</Ta></li>
                </ul>
                <div className="aiw-module-duration">
                  <En>2 Hours Live Demo</En><Ta>2 மணி நேர நேரடி விளக்கம்</Ta>
                </div>
              </div>
            </div>
            {/* Module 3 */}
            <div className="aiw-module-card">
              <div className="aiw-module-header mod3">
                <div className="aiw-module-num"><En>MODULE 3</En><Ta>பிரிவு 3</Ta></div>
                <div className="aiw-module-title">
                  <En>AI in Every Career Path</En>
                  <Ta>ஒவ்வொரு தொழிலிலும் AI</Ta>
                </div>
              </div>
              <div className="aiw-module-body">
                <ul>
                  <li><En>AI in Healthcare &amp; Medicine</En><Ta>சுகாதாரம் &amp; மருத்துவத்தில் AI</Ta></li>
                  <li><En>AI in Engineering &amp; Technology</En><Ta>பொறியியல் &amp; தொழில்நுட்பத்தில் AI</Ta></li>
                  <li><En>AI in Business &amp; Entrepreneurship</En><Ta>வணிகம் &amp; தொழில்முனைவில் AI</Ta></li>
                  <li><En>Future career trends &amp; opportunities</En><Ta>எதிர்கால தொழில் போக்குகள் &amp; வாய்ப்புகள்</Ta></li>
                </ul>
                <div className="aiw-module-duration">
                  <En>2 Hours Expert Talks</En><Ta>2 மணி நேர நிபுணர் பேச்சு</Ta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STUDENT BENEFITS ==================== */}
      <section className="aiw-benefits">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge" style={{ background: "rgba(125,178,71,0.15)", color: "#7db247", borderColor: "rgba(125,178,71,0.25)" }}>
              <En>FOR STUDENTS ONLY</En><Ta>மாணவர்களுக்கு மட்டுமே</Ta>
            </div>
            <h2 className="aiw-section-title" style={{ color: "#fff" }}>
              <En>Your Future Starts Here</En>
              <Ta>உங்கள் எதிர்காலம் இங்கே தொடங்குகிறது</Ta>
            </h2>
          </div>
          <div className="aiw-benefits-grid">
            {/* Panel 1 */}
            <div className="aiw-glass-panel">
              <h3><En>What You&apos;ll Experience</En><Ta>நீங்கள் என்ன அனுபவிப்பீர்கள்</Ta></h3>
              <ul className="aiw-benefit-list">
                <li>{IconCheck} <span><En>AI-powered career aptitude testing</En><Ta>AI மூலம் தொழில் திறன் பரிசோதனை</Ta></span></li>
                <li>{IconCheck} <span><En>Personalized career recommendations</En><Ta>தனிப்பயன் தொழில் பரிந்துரைகள்</Ta></span></li>
                <li>{IconCheck} <span><En>Hands-on AI tools workshop</En><Ta>AI கருவிகள் நடைமுறை பயிற்சி</Ta></span></li>
                <li>{IconCheck} <span><En>Industry expert career talks</En><Ta>தொழில்துறை நிபுணர் பேச்சு</Ta></span></li>
                <li>{IconCheck} <span><En>Live AI demonstrations</En><Ta>நேரடி AI விளக்கங்கள்</Ta></span></li>
                <li>{IconCheck} <span><En>Interactive Q&amp;A sessions</En><Ta>ஊடாடல் கேள்வி-பதில் அமர்வுகள்</Ta></span></li>
                <li>{IconCheck} <span><En>Free refreshments &amp; materials</En><Ta>இலவச சிற்றுண்டி &amp; பொருட்கள்</Ta></span></li>
              </ul>
              <div className="aiw-benefit-sidebar">
                <h4><En>What You&apos;ll Take Home</En><Ta>நீங்கள் வீட்டிற்கு எடுத்துச் செல்வது</Ta></h4>
                <ul className="aiw-benefit-list">
                  <li>{IconRocket} <span><En>AI Career Report Card</En><Ta>AI தொழில் அறிக்கை அட்டை</Ta></span></li>
                  <li>{IconRocket} <span><En>Certificate of Participation</En><Ta>பங்கேற்பு சான்றிதழ்</Ta></span></li>
                  <li>{IconRocket} <span><En>Career Roadmap Document</En><Ta>தொழில் வழிகாட்டி ஆவணம்</Ta></span></li>
                  <li>{IconRocket} <span><En>AI Tools Quick Reference</En><Ta>AI கருவிகள் விரைவு குறிப்பு</Ta></span></li>
                  <li>{IconRocket} <span><En>Follow-up Mentoring Access</En><Ta>தொடர் வழிகாட்டுதல் அணுகல்</Ta></span></li>
                </ul>
              </div>
            </div>
            {/* Panel 2 */}
            <div className="aiw-glass-panel">
              <div className="aiw-jkkn-stats">
                <div className="aiw-jkkn-stat">
                  <div className="aiw-jkkn-stat-num">92%+</div>
                  <div className="aiw-jkkn-stat-label"><En>Placement Rate</En><Ta>வேலைவாய்ப்பு விகிதம்</Ta></div>
                </div>
                <div className="aiw-jkkn-stat">
                  <div className="aiw-jkkn-stat-num">25 LPA</div>
                  <div className="aiw-jkkn-stat-label"><En>Highest Package</En><Ta>அதிகபட்ச ஊதியம்</Ta></div>
                </div>
                <div className="aiw-jkkn-stat">
                  <div className="aiw-jkkn-stat-num">100+</div>
                  <div className="aiw-jkkn-stat-label"><En>Recruiters</En><Ta>நிறுவனங்கள்</Ta></div>
                </div>
                <div className="aiw-jkkn-stat">
                  <div className="aiw-jkkn-stat-num">NAAC A+</div>
                  <div className="aiw-jkkn-stat-label"><En>Accreditation</En><Ta>அங்கீகாரம்</Ta></div>
                </div>
              </div>
              <h3><En>Why JKKN?</En><Ta>ஏன் JKKN?</Ta></h3>
              <ul className="aiw-why-list">
                <li>{IconCheck} <span><En>74+ years of educational excellence</En><Ta>74+ ஆண்டுகால கல்வி சிறப்பு</Ta></span></li>
                <li>{IconCheck} <span><En>8 colleges across multiple disciplines</En><Ta>பல துறைகளில் 8 கல்லூரிகள்</Ta></span></li>
                <li>{IconCheck} <span><En>Industry-connected placement cell</En><Ta>தொழில்துறை இணைப்பு வேலைவாய்ப்பு பிரிவு</Ta></span></li>
                <li>{IconCheck} <span><En>Committed to rural student development</En><Ta>கிராமப்புற மாணவர் வளர்ச்சிக்கு அர்ப்பணிப்பு</Ta></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="aiw-steps">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>HOW IT WORKS</En><Ta>எவ்வாறு செயல்படுகிறது</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>Simple 6-Step Workshop Day</En>
              <Ta>எளிய 6-படி பட்டறை நாள்</Ta>
            </h2>
          </div>
          <div className="aiw-steps-grid">
            {[
              { num: 1, sc: "sc1", en: "Welcome & Registration", ta: "வரவேற்பு & பதிவு", time: "9:00 AM", descEn: "Check-in, welcome kit, and orientation", descTa: "பதிவு, வரவேற்பு தொகுப்பு, மற்றும் அறிமுகம்" },
              { num: 2, sc: "sc2", en: "AI Aptitude Test", ta: "AI திறன் பரிசோதனை", time: "9:30 AM", descEn: "Take the AI-powered career assessment", descTa: "AI தொழில் மதிப்பீடு எடுங்கள்" },
              { num: 3, sc: "sc3", en: "Career Results", ta: "தொழில் முடிவுகள்", time: "11:00 AM", descEn: "Receive your personalized career report", descTa: "உங்கள் தனிப்பயன் தொழில் அறிக்கையைப் பெறுங்கள்" },
              { num: 4, sc: "sc4", en: "AI Tools Lab", ta: "AI கருவிகள் ஆய்வகம்", time: "12:00 PM", descEn: "Hands-on with ChatGPT, Gemini & more", descTa: "ChatGPT, Gemini மற்றும் பிற கருவிகள் பயிற்சி" },
              { num: 5, sc: "sc5", en: "Career Talks", ta: "தொழில் பேச்சு", time: "2:00 PM", descEn: "Industry experts share AI career insights", descTa: "தொழில்துறை நிபுணர்கள் AI தொழில் நுண்ணறிவுகளைப் பகிர்வார்கள்" },
              { num: 6, sc: "sc6", en: "Certificates", ta: "சான்றிதழ்கள்", time: "4:00 PM", descEn: "Receive certificates and career roadmap", descTa: "சான்றிதழ்கள் மற்றும் தொழில் வழிகாட்டியைப் பெறுங்கள்" },
            ].map((s) => (
              <div className="aiw-step-card" key={s.num}>
                <div className={`aiw-step-circle ${s.sc}`}>{s.num}</div>
                <h4><En>{s.en}</En><Ta>{s.ta}</Ta></h4>
                <div className="aiw-step-time">{s.time}</div>
                <p className="aiw-step-desc"><En>{s.descEn}</En><Ta>{s.descTa}</Ta></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORKSHOP SCHEDULE ==================== */}
      <section className="aiw-schedule">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>UPCOMING WORKSHOPS</En><Ta>வரவிருக்கும் பட்டறைகள்</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>Workshop Schedule 2026</En>
              <Ta>பட்டறை அட்டவணை 2026</Ta>
            </h2>
          </div>
          <div className="aiw-schedule-grid">
            <div className="aiw-schedule-card">
              <h4><En>Namakkal District Schools</En><Ta>நாமக்கல் மாவட்ட பள்ளிகள்</Ta></h4>
              <p className="aiw-schedule-meta">{IconPhone} <En>Venue: JKKN Campus, Komarapalayam</En><Ta>இடம்: JKKN வளாகம், கோமாரபாளையம்</Ta></p>
              <p className="aiw-schedule-meta"><En>Date: [UPDATE]</En><Ta>தேதி: [UPDATE]</Ta></p>
              <p className="aiw-schedule-meta"><En>Seats: 200</En><Ta>இடங்கள்: 200</Ta></p>
              <span className="aiw-schedule-status aiw-status-open"><En>Open for Registration</En><Ta>பதிவுக்கு திறந்தது</Ta></span>
            </div>
            <div className="aiw-schedule-card">
              <h4><En>Salem &amp; Erode Schools</En><Ta>சேலம் &amp; ஈரோடு பள்ளிகள்</Ta></h4>
              <p className="aiw-schedule-meta">{IconPhone} <En>Venue: JKKN Campus, Komarapalayam</En><Ta>இடம்: JKKN வளாகம், கோமாரபாளையம்</Ta></p>
              <p className="aiw-schedule-meta"><En>Date: [UPDATE]</En><Ta>தேதி: [UPDATE]</Ta></p>
              <p className="aiw-schedule-meta"><En>Seats: 300</En><Ta>இடங்கள்: 300</Ta></p>
              <span className="aiw-schedule-status aiw-status-open"><En>Open for Registration</En><Ta>பதிவுக்கு திறந்தது</Ta></span>
            </div>
            <div className="aiw-schedule-card">
              <h4><En>Tiruchengode &amp; Surrounds</En><Ta>திருச்செங்கோடு &amp; சுற்றுப்புறங்கள்</Ta></h4>
              <p className="aiw-schedule-meta">{IconPhone} <En>Venue: School Visit</En><Ta>இடம்: பள்ளி வருகை</Ta></p>
              <p className="aiw-schedule-meta"><En>Date: [UPDATE]</En><Ta>தேதி: [UPDATE]</Ta></p>
              <p className="aiw-schedule-meta"><En>Seats: Request Available</En><Ta>இடங்கள்: கோரிக்கை கிடைக்கும்</Ta></p>
              <span className="aiw-schedule-status aiw-status-soon"><En>Coming Soon</En><Ta>விரைவில்</Ta></span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JKKN TRUST ==================== */}
      <section className="aiw-trust">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>POWERED BY JKKN INSTITUTIONS</En><Ta>JKKN நிறுவனங்களால் வழங்கப்படுகிறது</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>74+ Years of Educational Excellence</En>
              <Ta>74+ ஆண்டுகால கல்வி சிறப்பு</Ta>
            </h2>
          </div>
          <div className="aiw-trust-grid">
            <div className="aiw-trust-card">
              <div className="aiw-trust-card-num">8</div>
              <div className="aiw-trust-card-label"><En>Colleges</En><Ta>கல்லூரிகள்</Ta></div>
            </div>
            <div className="aiw-trust-card">
              <div className="aiw-trust-card-num">50+</div>
              <div className="aiw-trust-card-label"><En>Programs</En><Ta>படிப்புகள்</Ta></div>
            </div>
            <div className="aiw-trust-card">
              <div className="aiw-trust-card-num">50K+</div>
              <div className="aiw-trust-card-label"><En>Alumni</En><Ta>முன்னாள் மாணவர்கள்</Ta></div>
            </div>
            <div className="aiw-trust-card">
              <div className="aiw-trust-card-num">92%+</div>
              <div className="aiw-trust-card-label"><En>Placement Rate</En><Ta>வேலைவாய்ப்பு விகிதம்</Ta></div>
            </div>
          </div>
          <div className="aiw-college-chips">
            {[
              { en: "Dental", ta: "பல்" },
              { en: "Pharmacy", ta: "மருந்தியல்" },
              { en: "Nursing", ta: "செவிலியர்" },
              { en: "Engineering", ta: "பொறியியல்" },
              { en: "Allied Health", ta: "சுகாதாரம்" },
              { en: "Arts & Science", ta: "கலை & அறிவியல்" },
              { en: "Education", ta: "கல்வி" },
              { en: "Schools", ta: "பள்ளிகள்" },
            ].map((c) => (
              <span className="aiw-college-chip" key={c.en}>
                <En>{c.en}</En><Ta>{c.ta}</Ta>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REGISTRATION ==================== */}
      <section className="aiw-registration" id="register">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge" style={{ background: "rgba(125,178,71,0.15)", color: "#7db247", borderColor: "rgba(125,178,71,0.25)" }}>
              <En>FREE REGISTRATION</En><Ta>இலவச பதிவு</Ta>
            </div>
            <h2 className="aiw-section-title" style={{ color: "#fff" }}>
              <En>Register for AI Career Workshop</En>
              <Ta>AI தொழில் பட்டறைக்கு பதிவு செய்யுங்கள்</Ta>
            </h2>
          </div>
          <div className="aiw-form-box">
            {formSubmitted ? (
              <div className="aiw-success">
                <div className="aiw-success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3><En>Registration Successful!</En><Ta>பதிவு வெற்றிகரமாக முடிந்தது!</Ta></h3>
                <p>
                  <En>Thank you for registering! We will contact you soon with workshop details. Check your phone for a confirmation message.</En>
                  <Ta>பதிவு செய்ததற்கு நன்றி! பட்டறை விவரங்களுடன் விரைவில் உங்களை தொடர்பு கொள்வோம். உறுதிப்படுத்தல் செய்திக்கு உங்கள் தொலைபேசியை சரிபார்க்கவும்.</Ta>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label><En>Full Name *</En><Ta>முழு பெயர் *</Ta></label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInput} placeholder="Enter student's full name" required />

                <label><En>Phone Number *</En><Ta>தொலைபேசி எண் *</Ta></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInput} placeholder="Enter phone number" required />

                <label><En>Email (Optional)</En><Ta>மின்னஞ்சல் (விருப்பத்திற்கு)</Ta></label>
                <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="Enter email address" />

                <label><En>School Name *</En><Ta>பள்ளி பெயர் *</Ta></label>
                <input type="text" name="school" value={formData.school} onChange={handleInput} placeholder="Enter school name" required />

                <label><En>District *</En><Ta>மாவட்டம் *</Ta></label>
                <select name="district" value={formData.district} onChange={handleInput} required>
                  <option value="">{showTamil ? "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்" : "Select District"}</option>
                  <option value="Namakkal">Namakkal</option>
                  <option value="Salem">Salem</option>
                  <option value="Erode">Erode</option>
                  <option value="Dharmapuri">Dharmapuri</option>
                  <option value="Karur">Karur</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Other">Other</option>
                </select>

                <label><En>Student&apos;s Class *</En><Ta>மாணவரின் வகுப்பு *</Ta></label>
                <select name="studentClass" value={formData.studentClass} onChange={handleInput} required>
                  <option value="">{showTamil ? "வகுப்பைத் தேர்ந்தெடுக்கவும்" : "Select Class"}</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>

                <div className="aiw-consent">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInput} required />
                  <span>
                    <En>I consent to JKKN Educational Institutions collecting this information for workshop registration purposes. We will never share your data with third parties.</En>
                    <Ta>பட்டறை பதிவு நோக்கங்களுக்காக JKKN கல்வி நிறுவனங்கள் இந்த தகவல்களை சேகரிக்க ஒப்புக்கொள்கிறேன். உங்கள் தரவை நாங்கள் மூன்றாம் தரப்பினருடன் பகிர மாட்டோம்.</Ta>
                  </span>
                </div>

                <button type="submit" className="aiw-form-submit">
                  <En>Register for Free Workshop</En>
                  <Ta>இலவச பட்டறைக்கு பதிவு செய்யுங்கள்</Ta>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="aiw-faq">
        <div className="aiw-container aiw-reveal" ref={addRevealRef}>
          <div className="aiw-text-center aiw-mb-48">
            <div className="aiw-section-badge">
              <En>FAQ</En><Ta>அடிக்கடி கேட்கப்படும் கேள்விகள்</Ta>
            </div>
            <h2 className="aiw-section-title">
              <En>Got Questions? We Have Answers.</En>
              <Ta>கேள்விகள் உள்ளதா? பதில்கள் உள்ளன.</Ta>
            </h2>
          </div>
          <div className="aiw-faq-list">
            {faqItems.map((faq, idx) => (
              <div className="aiw-faq-item" key={idx}>
                <button className="aiw-faq-q" onClick={() => toggleFaq(idx)}>
                  <span><En>{faq.qEn}</En><Ta>{faq.qTa}</Ta></span>
                  <span className={`aiw-faq-arrow${openFaq === idx ? " open" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </button>
                <div className={`aiw-faq-a${openFaq === idx ? " expanded" : ""}`}>
                  <p><En>{faq.aEn}</En><Ta>{faq.aTa}</Ta></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="aiw-cta-banner">
        <div className="aiw-container">
          <h2>
            <En>Don&apos;t Let Your Village Decide Your Future. Let AI Show You the Way.</En>
            <Ta>உங்கள் கிராமம் உங்கள் எதிர்காலத்தை தீர்மானிக்க விடாதீர்கள். AI வழியைக் காட்டட்டும்.</Ta>
          </h2>
          <p>
            <En>Register now for the free AI Career Workshop and unlock your potential.</En>
            <Ta>இலவச AI தொழில் பட்டறைக்கு இப்போதே பதிவு செய்து உங்கள் திறனை வெளிப்படுத்துங்கள்.</Ta>
          </p>
          <div className="aiw-cta-btns">
            <a href="#register" className="aiw-btn-white">
              <En>Register Free Now</En>
              <Ta>இப்போதே இலவசமாக பதிவு செய்க</Ta>
            </a>
            <a
              href="https://wa.me/919345855001"
              target="_blank"
              rel="noopener noreferrer"
              className="aiw-btn-wa"
            >
              {IconWhatsApp}
              <En>WhatsApp Us</En>
              <Ta>WhatsApp செய்யுங்கள்</Ta>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP FLOATING BUTTON ==================== */}
      <a
        href="https://wa.me/919345855001"
        target="_blank"
        rel="noopener noreferrer"
        className="aiw-wa-float"
        aria-label="Chat on WhatsApp"
      >
        {IconWhatsApp}
      </a>
    </div>
  );
}
