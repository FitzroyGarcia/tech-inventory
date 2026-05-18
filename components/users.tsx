'use client'

import { useState } from 'react'
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { supabase } from '@/lib/supabase'

export default function Usuarios() {
    const [users, setUsers] = useState<any[]>([])

    const cargar = async () => {
        const { data, error } = await supabase
            .from('users')
            .select('*')

        if (error) {
            console.log(error)
            return
        }

        console.log(data)
        setUsers(data || [])
    }

    const columns = users.length > 0 ? Object.keys(users[0]).map((key) => (
        <Column key={key} field={key} header={key.charAt(0).toUpperCase() + key.slice(1)} />
    )) : null;

    return (
        <div className="p-5">
            <Button
                label="Cargar usuarios"
                onClick={cargar}
                className="mb-4"
            />
            {users.length > 0 && (
                <div className="card mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <DataTable value={users} tableStyle={{ minWidth: '50rem' }} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
                        {columns}
                    </DataTable>
                </div>
            )}
        </div>
    )
}
