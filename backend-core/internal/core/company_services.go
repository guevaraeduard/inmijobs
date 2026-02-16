package core

import (
	"github.com/Gabo-div/bingo/inmijobs/backend-core/internal/dto"
	"github.com/Gabo-div/bingo/inmijobs/backend-core/internal/model"
	"github.com/Gabo-div/bingo/inmijobs/backend-core/internal/repository"
	"github.com/google/uuid"
)

type CompanyService struct {
	repo repository.CompanyRepository
}

func NewCompanyService(repo repository.CompanyRepository) *CompanyService {
	return &CompanyService{repo: repo}
}

func (s *CompanyService) CreateCompany(req dto.CreateCompanyRequest, userID string) (string, error) {
	companyID := uuid.New().String()

	company := model.Company{
		ID:          companyID,
		Name:        req.Name,
		Weblink:     req.Weblink,
		LinkedinURL: req.LinkedinURL,
		Number:      req.Number,
		Description: req.Description,
		Sector:      req.Sector,
		Foundation:  req.Foundation,
		Size:        req.Size,
		UserID:      userID,
	}

	for _, l := range req.Locations {
		company.Locations = append(company.Locations, model.Location{
			ID:        uuid.New().String(),
			Address:   l.Address,
			City:      l.City,
			Country:   l.Country,
			IsHQ:      l.IsHQ,
			CompanyID: companyID,
		})
	}

	return companyID, s.repo.Create(&company)
}

func (s *CompanyService) GetCompany(id string) (*dto.CompanyResponse, error) {
	m, err := s.repo.GetByID(id)
	if err != nil {
		return nil, err
	}

	res := &dto.CompanyResponse{
		ID:          m.ID,
		Name:        m.Name,
		LinkedinURL: m.LinkedinURL,
		Sector:      m.Sector,
		Logo:        m.Logo,
	}

	for _, l := range m.Locations {

		res.Locations = append(res.Locations, dto.LocationResponse{
			Address: l.Address,
			City:    l.City,
			IsHQ:    l.IsHQ,
		})
	}

	return res, nil
}
