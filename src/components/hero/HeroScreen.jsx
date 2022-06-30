import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    const { id } = useParams();
    const hero = getHeroById(id);
    const navigate = useNavigate();

    const handleReturn = (e) => {
        navigate(-1);    
    }
    
    if (!hero) return <Navigate to={'/'} />

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>  {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> {hero.first_appearance}
                    </li>
                </ul>
                <br />
                <h5>Characters</h5>
                <p>{hero.characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}>
                    Regresar
                </button>
            </div>

        </div>
    )
}
