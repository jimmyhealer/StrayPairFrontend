<template>
  <div>
    <b-button v-b-toggle.sidebar-1>喜愛的寵物</b-button>
    <b-sidebar id="sidebar-1" title="喜愛的寵物" shadow>
      <div class="px-3 py-2">
        <b-list-group>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>