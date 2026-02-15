package repository

import (
	"github.com/Gabo-div/bingo/inmijobs/backend-core/internal/model"
	"gorm.io/gorm"
)

type ConnectionRepository struct {
	db *gorm.DB
}

func NewConnectionRepository(db *gorm.DB) *ConnectionRepository {
	return &ConnectionRepository{db: db}
}

// POST: Crear solicitud
func (r *ConnectionRepository) Create(conn *model.Connection) error {
	return r.db.Create(conn).Error
}

// PUT: Actualizar (Aceptar/Rechazar)
func (r *ConnectionRepository) UpdateStatus(id string, status model.ConnectionStatus) error {
	return r.db.Model(&model.Connection{}).Where("id = ?", id).Update("status", status).Error
}

// DELETE: Eliminar
func (r *ConnectionRepository) Delete(id string) error {
	return r.db.Delete(&model.Connection{}, id).Error
}