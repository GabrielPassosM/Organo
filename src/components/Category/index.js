import Player from "../Player"
import "./Category.css"
import hexToRgba from 'hex-to-rgba';

const Category = ({ players, color, name, onDelete, onFavorite }) => {
    return (
        players.length > 0 && <section className="category" style={{ backgroundColor: hexToRgba(color, 0.4) }}>
            <h3 style={{borderColor: color}} >{name}</h3>
            <div className="players">
                {players.map(p => {
                    return <Player 
                        key={p.id}
                        id={p.id}
                        favorite={p.favorite}
                        headerColor={color} 
                        name={p.name} 
                        image={p.image} 
                        quantity={p.quantity} 
                        onDelete={onDelete}
                        onFavorite={onFavorite}
                    />
                })}
            </div>
        </section>
    )
}

export default Category