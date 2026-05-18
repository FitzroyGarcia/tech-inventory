'use client'
import Image from "next/image";
import { Button } from 'primereact/button'
import { supabase } from '@/lib/supabase'
import Usuarios from "@/components/users";

export default function Home() {
  return <Usuarios />
}
