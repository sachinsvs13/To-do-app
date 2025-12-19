export default function NavBar({ Nav, Icon, header, footer }) {

  const IconComponent = Icon
  return (
    <>
      <div className="sub-options">
        <h5>{header}</h5>
        {Nav.map((items, index) => {
          const Icon = items.icon;
          return (
            <button className="sub-options-items" key={index}>
              <Icon className="icon" /> {items.name}
            </button>
          );
        })}
        <i style={{ borderTop: "1px solid #9a9a9a", margin: "0.2rem 0" }}></i>
        <button
          className="sub-options-items"
          style={{ margin: "0.2rem 0", paddingTop: "1rem" }}
        >
          <IconComponent className="icon" /> {footer}
        </button>
      </div>
    </>
  );
}
