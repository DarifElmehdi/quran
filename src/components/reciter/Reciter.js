import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";

function Reciter(props) {
    let { arName, enName, identifier } = props;

    return (
        <Link to={`/audio/${identifier}`} key={identifier}>
            <div className="py-2 px-2 flex flex-row rounded-md bg-neutral-100   items-center cursor-pointer ">
                <Avatar name={enName} />
                <div className="mx-2 grow flex flex-row justify-between items-center text-gray-900">
                    <div>
                        <p>{enName}</p>
                    </div>
                    <div dir="rtl">
                        <p>{arName}</p>
                    </div>
                </div>
                <Avatar name={arName} />
            </div>
        </Link>
    );
}

export default Reciter;
