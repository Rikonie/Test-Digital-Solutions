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
            <div className={styles.imageContainer}>
                <img src={center} alt={""} className={styles.imageCenter}/>
                <div className={styles.title}>
                    <div>Twenty One Pilots</div>
                    <div className={styles.dateTitle}>22.02.23 в 21:00</div>
                </div>
                <div className={styles.containerButtonBuy}>
                    <button className={styles.buttonArrowLeft}><img src={arrowLeft} alt={""}/></button>
                    <button className={styles.buttonBuyTicket}>Купить билет</button>
                    <button className={styles.buttonArrowRight}><img src={arrowRight} alt={""}/></button>
                </div>
            </div>
            <div className={styles.boughtTickets}>
                <div className={styles.boughtTicketsTitle}>Купили билеты</div>
                <div className={styles.boughtTicketsCount}>932/<span style={{color: "#DADADA"}}>1000</span></div>
            </div>
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

                <img src={line} alt={""} style={{marginLeft:"61px"}}/>
                <img src={blackLine} alt={""}/>
                <div>
                    <div className={styles.aboutTitle}>О площадке</div>
                    <div className={styles.aboutBody1}>Современная площадка для проведения <br/> концертов и других
                        мероприятий любой <br/> сложности.
                    </div>
                    <div className={styles.aboutBody2}>Мы предоставляем всю необходимую для <br/> организаторов
                        инфраструктуру и готовые <br/> решения под все основные задачи любого <br/>
                        события, а также современное <br/> оборудование, соответствующее самым <br/>
                        высоким мировым стандартам.
                    </div>
                </div>
                <div className={styles.containerSubmit}>
                    <div className={styles.submitText}>Оставить заявку на проведение концерта</div>
                    <input className={styles.submitInput} placeholder={"Расскажите о вашем предложении"}/>
                    <button className={styles.buttonSubmit}>Отправить</button>
                </div>
            </div>
            <div className={styles.containerAbout}>
                <div>О группе</div>
                <div>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
                    Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана.
                    Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в
                    2011.
                </div>
            </div>
        </div>
    );
};