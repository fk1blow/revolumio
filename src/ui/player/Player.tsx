import { Flex } from "@chakra-ui/react"
import { FunctionComponent, useEffect } from "react"
import { io } from "../../lib/socket.io/client"
import { PlaybackMeta } from "./PlaybackMeta"
import { PlayerControls } from "./PlayerControls"

interface PlayerProps {}

export const Player: FunctionComponent<PlayerProps> = (_props) => {
  useEffect(() => {
    // const socket = io("http://volumio.local:3000")
    const socket = io("http://volumio.local:3000")

    // const socket = io("http://volumio.local:3000")
    // console.log("io.prototype: ", io.prototype)
    // io.prototype.constructor.protocol = 3
    // console.log("socket: ", socket)
    // socket.emit("volume", 0)
    // socket.on("connection", (socket) => {
    //   console.log(socket.id) // x8WIv7-mJelg7on_ALbx
    // })
    // socket.on("disconnect", () => {
    //   console.log(socket.id) // undefined
    // })
    // console.log("socket: ", socket)
  }, [])

  return (
    <Flex w="100%" h="full" justify={"space-between"} gap="4rem">
      <PlaybackMeta />
      <PlayerControls />
    </Flex>
  )
}
