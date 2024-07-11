

const BookingRow = ({ booking }) => {
    const { customerName, email, date, service, price, img } = booking
    return (
        <div>
            <tr>
                <td>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </td>
                <td>
                    <img src={img} className="w-96" alt="" />
                </td>
                <td>
                    {customerName}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {date}
                </td>
                <td>
                    {service}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">details</button>
                </td>
            </tr>
        </div>
    );
};

export default BookingRow;