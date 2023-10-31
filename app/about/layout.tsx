export default function Layout(props:{children: React.ReactNode }) {
    return (
    <>
        <p>글로벌 레이아웃</p>
        {props.children}
    </>
    )
  }
