import React from "react"
import Layout from "../layout/layout"
import { observer } from "mobx-react-lite"
import Counter from "../store/counter"
import { Button } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import "../sass/main.sass"

const Main = observer(() => {
	return (
		<Layout>
			<div className="main">
				<h1>{Counter.count}</h1>
				<Button
					type="primary"
					shape="circle"
					icon={<PlusOutlined />}
					size={'large'}
					onClick={() => Counter.inc()}
				/>
				<Button
					type="primary"
					shape="circle"
					icon={<MinusOutlined />}
					size={'large'}
					onClick={() => Counter.dec()}
				/>
			</div>
		</Layout>
	)
})

export default Main
