export default function Layout({ children }) {
  return (
      <div style={{display: 'flex', flexDirection: 'column'}} className={'main__wrap'}>
        {children}
      </div>
  )
}
