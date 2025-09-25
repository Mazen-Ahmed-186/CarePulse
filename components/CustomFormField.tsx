import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Control} from "react-hook-form";
import {FormFieldType} from "@/components/forms/PatientForm";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {E164Number} from "libphonenumber-js";

interface CustomProps{
    control: Control<any>;
    fieldType: FormFieldType;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field : any) => React.ReactNode;
}

const RenderField = ({field, props} : {field : any; props: CustomProps}) => {
    const {fieldType, name, label, placeholder, iconSrc, iconAlt} = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className={"flex rounded-md border border-dark-500 bg-dark-400"}>
                    {props.iconSrc && (
                        <Image
                            src={iconSrc!}
                            alt={iconAlt || "icon"}
                            height={24}
                            width={24}
                            className={"ml-2"}
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className={"shad-input border-0"}
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry={"US"}
                        placeholder={placeholder}
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className={"input-phone"}
                        international
                        withCountryCallingCode
                    />
                </FormControl>
            )
        default:
            break;
    }
}

const CustomFormField = (props : CustomProps) => {

    const {placeholder, name, label, iconSrc, iconAlt, control, fieldType} = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={"flex-1"}>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>
                            {label}
                        </FormLabel>
                    )}

                    <RenderField
                        field={field}
                        props={props}
                    />

                    <FormMessage className={"shad-error"}>

                    </FormMessage>
                </FormItem>
            )}
        />
    )
}
export default CustomFormField
