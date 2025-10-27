import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import {getPatient} from "@/lib/actions/patient.actions";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);
    return (
        <div className={"flex h-screen max-h-screen"}>
            <section className={"hide-scrollbar my-auto relative flex-1 overflow-y-auto px-[5%]"}>
                <div className={"hidden h-full max-w-[860px] flex-1 justify-between object-cover md:block"}>
                    <Image
                        src={"/assets/icons/logo-full.svg"}
                        alt={"Logo"}
                        width={1000}
                        height={1000}
                        className={"mb-12 h-10 w-fit"}
                    />

                    <AppointmentForm
                        type={"create"}
                        userId={userId}
                        patientId={patient.$id}
                    />

                    <p className={"copyright mt-10 py-12"}>
                        © 2025 CarePulse
                    </p>

                </div>
            </section>
            <Image
                src={"/assets/images/appointment-img.png"}
                alt={"appointment"} width={1000}
                height={1000}
                className={"hidden h-full object-cover md:block maw-w-[390px] bg-bottom"}
            />
        </div>
    )
}
export default NewAppointment
