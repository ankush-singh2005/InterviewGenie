import React from 'react'
import {
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, Control } from 'react-hook-form'

interface CustomFormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file'
}

const CustomFormField = <T extends FieldValues>({
    control, 
    name, 
    label, 
    placeholder, 
    type = "text"
}: CustomFormFieldProps<T>) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className='label'>{label}</FormLabel>
                <FormControl>
                    <Input className='input'
                        placeholder={placeholder} 
                        type={type}
                        {...field} 
                    />
                </FormControl>
                
                <FormMessage />
            </FormItem>
        )}
    />
)

export default CustomFormField