import Helper from "../components/Helper/helper";

export default function Layout({ children }) {
  return (
      <div style={{display: 'flex', flexDirection: 'column'}} className={'main__wrap'}>
        <Helper />
        {children}
      </div>
  )
}
