interface MenuItemProps {
  label: string;
  onClick: () => void;
}
function MenuItem(props: MenuItemProps) {
  return (
    <div
      className="px-4 py-2 hover:bg-neutral-100 transition font-semibold"
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}

export default MenuItem;
