import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <button onClick={()=>{
      router.push("/problem/test");
    }}> Go to problem </button>
  )
}
