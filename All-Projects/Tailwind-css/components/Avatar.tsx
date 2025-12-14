import Image from "next/image"

export default function Avatar(){
    return (
        <Image
            src="/me.jpg"
            width={320}
            height={320}
            alt="Azizur Rahaman"
            priority
            sizes="(max-width: 768px) 100vw, 50 vw"
            className="rounded-full"
            />
    )
}