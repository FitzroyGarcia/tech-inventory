'use client'

import { Button } from 'primereact/button'
import { supabase } from '@/lib/supabase'

export default function Usuarios() {

    const cargar = async () => {

        const { data, error } = await supabase
            .from('users')
            .select('*')

        if (error) {
            console.log(error)
            return
        }

        console.log(data)
    }

    return (
        <div className="p-5">
            <Button
                label="Cargar usuarios"
                onClick={cargar}
            />
        </div>
    )
}