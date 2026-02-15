package model

import (
	"database/sql/driver"
	"fmt"
	"time"
)

type UnixTime time.Time

func (ut *UnixTime) Scan(value interface{}) error {
	if value == nil {
		return nil
	}

	switch v := value.(type) {
	case int64:
		*ut = UnixTime(time.Unix(v, 0))
		return nil
	case time.Time:
		*ut = UnixTime(v)
		return nil
	case []byte:
		t, err := time.Parse("2006-01-02 15:04:05", string(v))
		if err != nil {
			return err
		}
		*ut = UnixTime(t)
		return nil
	}

	return fmt.Errorf("cannot scan type %T into UnixTime", value)
}

func (ut UnixTime) Value() (driver.Value, error) {
	t := time.Time(ut)
	if t.IsZero() {
		return nil, nil
	}
	return t.Unix(), nil
}

func (ut UnixTime) Time() time.Time {
	return time.Time(ut)
}