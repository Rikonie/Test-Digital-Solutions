import {useAppDispatch} from "../../store/app-dispatch";
import {useEffect} from "react";
import {Actions} from "../../store/actions";
import {useSelector} from "react-redux";
import {usersInfoSelector} from "../../selector/users-selector";
import {User} from "../../classes/user";
import * as React from "react";
import styles from "./users-page.module.css";
import center from "../../assets/images/center.png"
import arrowLeft from "../../assets/images/arrow-left.png"
import arrowRight from "../../assets/images/arrow-right.png"
import line from "../../assets/images/line.png"
import blackLine from "../../assets/images/black-line.png"


export const UsersPage = () => {

    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(Actions.user.getUsers.request({}));
        }, []
    );

    let users = useSelector(usersInfoSelector) as User[];

    return (
        <div>
            <div>
                <img src={center} alt={""} className={styles.imageCenter}/>
                <div>Twenty One Pilots</div>
                <div>22.02.23 в 21:00</div>
                <button className={styles.buttonArrowLeft}><img src={arrowLeft} alt={""}/></button>
                <button>Купить билет</button>
                <button className={styles.buttonArrowLeft}><img src={arrowRight} alt={""}/></button>
            </div>
            <div>Купили билеты</div>
            <div>923/1000</div>
            <div className={styles.container}>
                {users ?
                    users?.map((i: any, key: number) => {
                        return (
                            <div key={key} className={styles.users}>
                                <div className={styles.username}>{i.username}</div>
                                <div className={styles.name}>{i.name}</div>
                                <form action={"/user/" + i.id}>
                                    <button type="submit" className={styles.buttonCheckProfile}>Смотреть профиль
                                    </button>
                                </form>
                            </div>
                        )
                    })
                    : ""}
            </div>
            <div className={styles.containerAbout}>
                <img src={line} alt={""}/>
                <img src={blackLine} alt={""}/>
                <div>
                    <div>О площадке</div>
                    <div>Современная площадка для проведения концертов и других мероприятий любой сложности.</div>
                    <div>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под
                        все основные задачи любого события, а также современное оборудование, соответствующее самым
                        высоким мировым стандартам.
                    </div>
                </div>
                <div>
                    <div>Оставить заявку на проведение концерта</div>
                    <input placeholder={"Расскажите о вашем предложении"}/>
                    <button>Отправить</button>
                </div>
            </div>
            <div className={styles.containerAbout}>
                <div>О группе</div>
                <div>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
                    Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана.
                    Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
                </div>
            </div>
        </div>
    );
};