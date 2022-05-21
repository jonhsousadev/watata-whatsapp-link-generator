interface LayoutProps {
  title: string
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col">
      <header>{props.title}</header>
      <main>
        {props.children}
      </main>
    </div>
  )
}