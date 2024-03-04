import { useState } from 'react'
import Greet from './component/Greet'
import Inline from './component/Inline'
import styles from './component/appStyle.module.css'


function App() {

    return (
        <>
            <Greet name="Ravi" />
            <Greet name="Shanky" primary={true} />
            <Inline />

            <p className={styles.primary}>This is module css.</p>
        </>
    )
}

export default App
