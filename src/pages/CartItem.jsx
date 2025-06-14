
function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <tr>
      <td>
        <img
          src={item.image}
          alt={item.name}
          style={{ height: 60, width: 60, objectFit: "contain" }}
        />
      </td>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          style={{ width: 50, textAlign: "center" }}
        />
      </td>
      <td>
        <button
          onClick={() => onRemove(item.id)}
          style={{
            cursor: "pointer",
            border: "none",
            background: "transparent",
            fontSize: "1.2rem",
            color: "red",
          }}
          aria-label={`Remove ${item.name} from cart`}
          title="Remove"
        >
          &times;
        </button>
      </td>
      <td style={{ color: "red", fontWeight: "bold" }}>
        ${(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
}