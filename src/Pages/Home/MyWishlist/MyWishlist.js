import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MyWishlist.css";

const MyWishlist = (props) => {
    const [boards, setBoards] = useState({});
    const [images, setImages] = useState([]);
    const { id } = useParams();
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(0);

    const wishCountHandler = async () => {
        if (!isWishAdd) {
            setWishCount(prev => prev + 1)
            await fetch(`https://localhost/${boards.id}`, {
                credentials: 'include',
                method: "POST",
                body: JSON.stringify({
                    liked: true
                }),
            })
            alert("has been added")
            console.log(boards)
            console.log("count+1")
        } else {
            setWishCount(prev => prev - 1)
            await fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
                credentials: 'include',
                method: "DELETE",
                body: JSON.stringify({
                    liked: false
                })
            })
            alert("Removed from wishlist.")
            console.log(boards)
            console.log("count-1")
        }
        setIsWishAdd(prev => !prev);
    }


    useEffect(() => {
        (async function () {
            await axios.get(`https://27.96.131.85:8443/api/boards/${id}`, {
                withCredentials: true,
            }).then((res) => {
                console.log(res);
                setBoards(res.data);
                setImages(res.data.boardImages);
            });

            // Save post information in state

        })();
    }, []);

    return (
        <div id="goods">
            <p className="goodsTitle">product information</p>
            <div className="images_container">
                {
                    images.map((images) => {
                        return (
                            <img className="goodsImages"
                                src={`https://27.96.131.85:8443/api/images/${images.id}`} alt='' />
                        )
                    })
                }
            </div>

            <div className="goodsContext">
                <div className="goodsBoardTitle">
                    {boards.title}
                </div>

                <div className="goodsName">
                    Goods : {boards.goodsName}
                </div>

                <div className="goodsPrice">
                    Price : $ {boards.price}
                </div>

                <div className="goodsWriter">
                    Seller : {boards.writer}
                </div>

                <div className="goodsText">
                    {boards.content}
                </div>

                <div className="goodsBtn">
                    <span className="zzimBtn">
                        <button class="btn btn-primary" type="submit" onClick={wishCountHandler}>to wish</button>
                    </span>
                    <button class="btn btn-primary" type="submit">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default MyWishlist;