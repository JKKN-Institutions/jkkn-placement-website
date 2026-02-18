import { Camera } from "lucide-react";

const galleryItems = [
  { label: "Placement Day Inauguration", color: "bg-green/10" },
  { label: "Interview Session", color: "bg-gold/10" },
  { label: "Group Discussion", color: "bg-green-light/10" },
  { label: "Company Presentation", color: "bg-green/15" },
  { label: "Offer Letter Distribution", color: "bg-gold/15" },
  { label: "Celebration Moment", color: "bg-green-light/15" },
];

export default function PlacementGallery() {
  return (
    <section id="gallery" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Gallery
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Placement Day <span className="text-green">Celebration 2025</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <div
              key={item.label}
              className={`group relative flex items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white ${idx === 0 ? "sm:col-span-2 sm:row-span-2 h-64 sm:h-full" : "h-48"} cursor-pointer transition-all hover:shadow-lg`}
            >
              <div className={`absolute inset-0 ${item.color}`} />
              <div className="relative text-center">
                <Camera className="mx-auto mb-2 h-10 w-10 text-green opacity-30" />
                <p className="text-sm font-medium text-body opacity-60">
                  {item.label}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-green/0 transition-all group-hover:bg-green/40">
                <p className="font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
