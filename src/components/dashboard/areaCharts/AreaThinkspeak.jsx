import AreaBarChart from "./AreaBarChart"
import AreaProgressChart from "./AreaProgressChart"
import Co2graph from './Co2graph'
import Tempgraph from "./Tempgraph"

const AreaThinkspeak = () => {
  return (
    <section className="content-area-charts">
      <Co2graph />
      <Tempgraph/>
    </section>
  )
}

export default AreaThinkspeak
