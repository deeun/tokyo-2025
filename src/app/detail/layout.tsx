import Helper from "../components/Helper/helper";
import styles from './detail.module.css';

export default function Layout({ children }) {
  return (
      <div style={{display: 'flex', flexDirection: 'column'}} className={'main__wrap'}>
        <Helper />
        {children}
      </div>
  )
}
