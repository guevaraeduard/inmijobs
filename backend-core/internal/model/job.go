package model

type Company struct {
	ID          string `gorm:"primaryKey"`
	Name        string `gorm:"not null"`
	Weblink     string
	LinkedinURL string
	Number      string
	Description string `gorm:"type:text"`
	Sector      string
	Foundation  string
	Size        string
	Logo        *string
	Banner      *string
	CreatedAt   UnixTime `gorm:"autoCreateTime"`
	UpdatedAt   UnixTime `gorm:"autoUpdateTime"`

	// Relación con dueño
	UserID string `gorm:"not null;index"`
	Owner  User   `gorm:"foreignKey:UserID"`

	// Relaciones
	Jobs []Job `gorm:"foreignKey:CompanyID"`
}

type Job struct {
    ID             string
    Title          string
    Description    string
    Location       string
    SalaryMin      *int     
    SalaryMax      *int    
    EmploymentType string   
    IsActive       bool
    CompanyID      string
    Company        Company
    Applications   []Application
}
