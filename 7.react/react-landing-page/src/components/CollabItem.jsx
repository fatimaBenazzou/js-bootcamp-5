export default function CollabItem({ item }) {
    return (
        <li className="mb-3 py-3">
            <div className="flex items-center">
                <img src={"/check.svg"} width={24} height={24} alt="check" />
                <h6 className="h6 ml-5">{item.title}</h6>
            </div>
            {item.text && <p className="body-2 mt-3 text-base">{item.text}</p>}
        </li>
    );
}
