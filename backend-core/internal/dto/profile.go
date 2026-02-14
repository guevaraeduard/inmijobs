package dto

type UpdateProfileRequest struct {
	Biography *string `json:"biography"`
	Location  *string `json:"location"`
}

type ProfileResponse struct {
	ID        string  `json:"id"`
	UserID    string  `json:"userId"`
	Biography *string `json:"biography,omitempty"`
	Location  *string `json:"location,omitempty"`
}
