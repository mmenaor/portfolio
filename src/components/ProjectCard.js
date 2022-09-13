import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt=""/>
                    {
                        url === '' ? (
                            <div className="proj-txtx" >
                                <h4>{title}</h4>
                                <span>{description}</span>
                            </div>
                        ) : (
                            <div className="proj-txtx cursor-pointer" >
                                <h4 onClick={() => window.open(url, '_blank')}>{title}</h4>
                                <span>{description}</span>
                            </div>
                        )
                    }
            </div>
        </Col>
    )
}
