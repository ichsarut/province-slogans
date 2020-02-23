import { RootState } from "../store"
import { connect } from "react-redux"
import SloganList from "../components/SloganList"
import { loadSlogans } from "../store/slogan/thunks"

const mapStateToProps = (state: RootState) => ({
  slogans: state.slogan.slogans
})
const mapDispatchToProps = {
  loadSlogans: loadSlogans
}
export const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(SloganList)
