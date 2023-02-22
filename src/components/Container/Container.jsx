import st from './Container.module.css'
import cn from 'classnames'

export const Container = ({className, children}) => {
  return (
      <div className={cn(st.container, className) }>
          { children }
      </div>
  )
}
