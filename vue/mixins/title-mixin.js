/** Get title from vue component options **/

function _getTitle(vm){
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

const serverTitleMixin = {
    created () {
        const title = _getTitle(this)
        if (title) {
            // Put title on the server side rendering with $ssrContext
            this.$ssrContext.title = title
        }
    }
}

const clientTitleMixin = {
    mounted () {
        const title = _getTitle(this)
        if (title) {
            // Using simple browser js
            document.title = title
        }
    }
}

export default process.env.VUE_ENV === 'server'
    ? serverTitleMixin
    : clientTitleMixin