.sidebar {
    height: calc(100vh - var(--navbar-height));
    width: 300px;
    background: var(--inverted-bg-color);
    position: relative;
    transition: width 0.3s;
}

.collapsed {
    width: var(--sidebar-width-collapsed);
}

.switchers {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
}

.lang {
    margin-left: 20px;
}