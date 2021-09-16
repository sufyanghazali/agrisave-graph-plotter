import { useMemo } from "react";
import { Delaunay } from 'd3';

const VoronoiOverlay = ({
    data,
    onHover,
    innerWidth,
    innerHeight,
    lineGenerator
}) => {
    return useMemo(() => {
        console.log("memoizing")
        const points = data.map(d => [lineGenerator.x()(d), lineGenerator.y()(d)]);
        const delaunay = Delaunay.from(points);
        const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight]);

        return (
            <g className="voronoi">
                {points.map((points, i) => (
                    <path onMouseEnter={(i) => onHover(data[i])} key={i} fill="none" stroke="pink" d={voronoi.renderCell(i)} />
                ))}
            </g>
        )
    }, [data, lineGenerator, innerWidth, innerHeight, onHover]);
}


export default VoronoiOverlay;