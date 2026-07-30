import Image from "next/image";

export function FieldAppPreview() {
  return (
    <figure className="mx-auto w-full max-w-[320px]">
      <Image
        src="/images/moedim-field-moringa-avocado.png"
        alt="Moedim Field app preview showing offline field visits for moringa and avocado plots"
        width={300}
        height={590}
        sizes="(min-width: 768px) 300px, 78vw"
        className="h-auto w-full drop-shadow-[0_28px_48px_rgba(0,0,0,0.55)]"
      />
    </figure>
  );
}
