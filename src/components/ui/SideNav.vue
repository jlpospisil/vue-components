<template>
  <nav
    class="side-nav"
    :class="{ 'is-open': open }"
  >
    <slot name="header" />

    <slot name="content" />

    <slot />

    <div
      v-for="(navGroup, groupIndex) in navGroups"
      :key="navGroup.key || `nav-item-${groupIndex}`"
      class="side-nav-group"
    >
      <side-nav-header v-if="navGroup.header">
        {{ navGroup.header }}
      </side-nav-header>

      <side-nav-link
        v-for="(navItem, itemIndex) in navGroup.items"
        :key="navItem.key || `nav-item-${itemIndex}`"
        :icon="navItem.icon"
        :label="navItem.label"
      />
    </div>

    <div style="flex: 1" />

    <div class="side-nav-footer">
      <slot name="footer" />
    </div>
    <slot name="footer" />
  </nav>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.side-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: $top-nav-height 0 0 0;
  font-size: $side-nav-font-size;
  background-color: $side-nav-bg-color;
  z-index: 899;
  width: 0;
  transition: width $side-nav-transition-duration $side-nav-transition-function;

  &.is-open {
    width: $side-nav-width;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: $side-nav-width;
      width: 15px;
      box-shadow: 15px 0 15px -15px $box-shadow-color inset;
    }
  }
}
</style>

<script>
import SideNavHeader from './SideNavHeader.vue';
import SideNavLink from './SideNavLink.vue';

export default {
  name: 'SideNav',
  components: {
    SideNavHeader,
    SideNavLink,
  },
  props: {
    open: { type: Boolean, default: true },
    navGroups: { type: Array, default: () => [] },
  },
};
</script>
