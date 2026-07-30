import Image from "next/image";

export function FieldAppPreview() {
  return (
    <figure className="mx-auto w-full max-w-[640px]">
      <Image
        src="/images/moedim-field-evidence-trio-v2.png"
        alt="Three Moedim Field app views showing moringa and avocado visits, GPS boundary work and field evidence"
        width={1236}
        height={1130}
        sizes="(min-width: 1280px) 560px, (min-width: 768px) 42vw, 92vw"
        unoptimized
        className="h-auto w-full"
      />
    </figure>
  );
}
