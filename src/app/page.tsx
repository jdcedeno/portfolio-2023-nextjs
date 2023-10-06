"use client"

import React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

function MyAnimatedBox() {
	const myMesh = React.useRef<Mesh>(null!)

	useFrame(({ clock }) => {
		myMesh.current.rotation.x = clock.getElapsedTime()
	})
	return (
		<mesh ref={myMesh}>
			<boxGeometry args={[2, 2, 2]} />
			<meshBasicMaterial color="royalblue" />
		</mesh>
	)
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{/* <div id="canvas-container ">
				<Canvas>
					<MyAnimatedBox />
					<ambientLight intensity={0.1} />
					<directionalLight />
				</Canvas>
			</div> */}
			<p>hello world this is a test</p>
		</main>
	)
}
