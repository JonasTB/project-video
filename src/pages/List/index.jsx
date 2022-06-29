import { useEffect, useState } from "react";
import api from '../../services/api';
import Frame from '../../components/Frame';
import Pagination from '../../components/Pagination';
import { Container, Added, Footer } from './styles';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  const [frame, setFrame] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [framePerPage] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFrame = async() => {
      await api.get('/video/list').then((res) => {
        setFrame(res.data);
        setLoading(true);
      }).catch((err) => {
        return err;
      });
    }
    loadFrame();
  }, [frame, loading]);

  const indexOfLastFrame = currentPage * framePerPage;
  const indexOfFirstFrame = indexOfLastFrame - framePerPage;
  const currentPages = frame.slice(indexOfFirstFrame, indexOfLastFrame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => this.setState({ currentPage: currentPage + 1 });
  const prevPage = () => this.setState({ currentPage: currentPage - 1 });

  const added = () => {
    navigate('/create');
  }

  return (
    <Container>
      <Added onClick={added}>Adicionar</Added>
      <Frame frames={frame} />
      <Footer>
        <Pagination
          postsPerPage={framePerPage}
          totalPosts={frame.length}
          paginate={paginate}
        />
      </Footer>
    </Container>
  )
}

export default List;