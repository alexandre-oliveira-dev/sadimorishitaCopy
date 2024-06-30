import { Row, Typography } from 'antd';
import Titles from '../titles';
import './style.css';


export default function NoticesComponent() {
    return (
      <div className="container-notices">
        <Titles text={"na Mídia"} sizeImage="150px"></Titles>
        <Row>
          <div className="box-notice">
            <Row className="notices-ilustration">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "15px 15px 0 0",
                }}
                src="https://sadimorishita.com.br/wp-content/uploads/2023/08/cassino_book.jpg"
                alt=""
              />
            </Row>
            <Row className="notices-text">
              <Typography.Title level={4}>
                E-book: Apóstas Esportivas e Cassinos Online
              </Typography.Title>
              <p style={{color: "grey"}}>
                Apostas Esportivas e Cassinos Online A regulação das apostas
                esportivas já é uma realidade! Este é um mercado que está se…
              </p>
            </Row>
          </div>
          <div className="box-notice">
            <Row className="notices-ilustration">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "15px 15px 0 0",
                }}
                src="https://sadimorishita.com.br/wp-content/uploads/2023/08/artigo_post.jpg"
                alt=""
              />
            </Row>
            <Row className="notices-text"></Row>
          </div>
          <div className="box-notice">
            <Row className="notices-ilustration">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "15px 15px 0 0",
                }}
                src="https://sadimorishita.com.br/wp-content/uploads/2023/08/artigo_post.jpg"
                alt=""
              />
            </Row>
            <Row className="notices-text"></Row>
          </div>
        </Row>
      </div>
    );
}