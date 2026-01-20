export default function NavBar({
  Nav,
  Icon,
  header,
  footer,
  handleClick,
  value,
  handleRemove,
  optionsClassName,
}) {
  const IconComponent = Icon[0];
  const DeleteIcon = Icon[1];

  console.log(value);

  return (
    <>
      {
        <div className="sub-options-container">
          <div className={optionsClassName}>
            <h5>{header}</h5>
            {Nav.map((items, index) => {
              const Icon = items.icon;
              return (
                <button
                  className="sub-options-items"
                  key={index}
                  value={items.name}
                  onClick={handleClick}
                >
                  <Icon className="icon" /> {items.name}{" "}
                  <span>{items.day}</span>
                </button>
              );
            })}
            <i
              style={{ borderTop: "1px solid #9a9a9a", margin: "0.2rem 0" }}
            ></i>
            <button
              className="sub-options-items"
              style={{ margin: "0.2rem 0", paddingTop: "1rem" }}
            >
              <IconComponent className="icon" /> {footer[0]}
            </button>
            {value ? (
              <>
                <i
                  style={{ borderTop: "1px solid #9a9a9a", margin: "0.2rem 0" }}
                ></i>
                <button
                  className="sub-options-items"
                  style={{
                    margin: "0.2rem 0",
                    paddingTop: "1rem",
                    color: "red",
                  }}
                  onClick={handleRemove}
                >
                  <DeleteIcon className="icon" /> {footer[1]}
                </button>
              </>
            ) : null}
          </div>
        </div>
      }
    </>
  );
}
