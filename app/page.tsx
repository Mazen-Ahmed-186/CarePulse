import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

const Home = () => {
    return (
        <div className={"flex h-screen max-h-screen"}>
            <section className={"hide-scrollbar my-auto relative flex-1 overflow-y-auto px-[5%]"}>
                <div className={"hidden h-full max-w-[496px] object-cover md:block"}>
                    <Image
                        src={"/assets/icons/logo-full.svg"}
                        alt={"Logo"}
                        width={1000}
                        height={1000}
                        className={"mb-12 h-10 w-fit"}
                    />

                    <PatientForm

                    />

                    <div className={"text-[14px] leading-[18px] font-normal mt-20 flex justify-between"}>
                        <p className={"justify-items-end text-dark-600 xl:text-left"}>
                            © 2025 CarePulse
                        </p>
                        <Link href={"/?admin=true"} className={"text-green-500"}>
                            Admin
                        </Link>
                    </div>
                </div>
            </section>
            <Image
                src={"/assets/images/onboarding-img.png"}
                alt={"Patient"} width={1000}
                height={1000}
                className={"hidden h-full object-cover md:block maw-w-[50%]"}
            />
        </div>
    )
}
export default Home
