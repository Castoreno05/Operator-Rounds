import React from "react";
import "../src/assets/css/styles.css";
import styles from "./App.module.css";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { PageRouter } from "./PageRouter";

function App() {
	return (
		<div className={styles.app}>
			<PageRouter />
			<ToastContainer/>
		</div>
	);
}

export default App;
