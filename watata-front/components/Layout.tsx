interface LayoutProps {
  title: string
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="h-screen w-full flex">
      <main className="flex flex-col md:flex-row h-screen w-full justify-center items-center">
        {props.children}
      </main>
    </div>
  )
}