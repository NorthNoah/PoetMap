import axios from "axios"
import { ElMessage as message, menuEmits } from "element-plus"

export async function getPoetInfo(poetName) {
  const res =  await axios.get(`http://101.34.228.44:3000/poet/getPoetCoors?poetName=${poetName}`)
  if (res.data) {
    message.success('查找成功')
  }
  else {
    message.error('查找失败')
  }
  return res.data
}